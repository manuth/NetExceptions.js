import { doesNotThrow, ok, strictEqual } from "assert";
import { Random } from "random-js";
import { Exception } from "../Exception";

/**
 * Registers tests for the {@link Exception `Exception`} class.
 */
export function ExceptionTests(): void
{
    suite(
        nameof(Exception),
        () =>
        {
            let random: Random;
            let message: string;
            let innerException: Exception;
            let exception: Exception;

            suiteSetup(
                () =>
                {
                    random = new Random();
                });

            setup(
                () =>
                {
                    message = random.string(15);
                    innerException = new Exception();
                    exception = new Exception(message, innerException);
                });

            suite(
                nameof(Exception.constructor),
                () =>
                {
                    test(
                        `Checking whether optional parameters don't need to be passed to the \`${nameof(Exception.constructor)}\`…`,
                        () =>
                        {
                            doesNotThrow(
                                () =>
                                {
                                    new Exception();
                                    new Exception(message);
                                    new Exception(message, innerException);
                                });
                        });

                    test(
                        "Checking whether the values are assigned correctly…",
                        () =>
                        {
                            strictEqual(exception.Message, message);
                            strictEqual(exception.InnerException, innerException);
                        });
                });

            suite(
                nameof<Exception>((exception) => exception.StackTrace),
                () =>
                {
                    test(
                        "Checking whether the stack-trace is recorded…",
                        () =>
                        {
                            ok(exception.StackTrace.length > 0);
                        });
                });

            suite(
                nameof<Exception>((exception) => exception.GetBaseException),
                () =>
                {
                    let baseException: Exception;

                    setup(
                        () =>
                        {
                            let innerException: Exception = null;
                            baseException = new Exception();

                            for (let i = random.integer(2, 10); i > 0; i--)
                            {
                                innerException = new Exception(undefined, innerException ?? baseException);
                            }

                            exception = new Exception(undefined, innerException);
                        });

                    test(
                        "Checking whether the base-exception can be retrieved…",
                        () =>
                        {
                            strictEqual(exception.GetBaseException(), baseException);
                        });
                });
        });
}
