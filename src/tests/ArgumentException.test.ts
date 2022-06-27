import { doesNotThrow, strictEqual } from "assert";
import { Random } from "random-js";
import { ArgumentException } from "../ArgumentException.js";
import { Exception } from "../Exception.js";

/**
 * Registers tests for the {@link ArgumentException `ArgumentException`} class.
 */
export function ArgumentExceptionTests(): void
{
    suite(
        nameof(ArgumentException),
        () =>
        {
            let random: Random;
            let message: string;
            let param: string;
            let innerException: Exception;
            let exception: ArgumentException;

            suiteSetup(
                () =>
                {
                    random = new Random();
                });

            setup(
                () =>
                {
                    message = random.string(15);
                    param = random.string(10);
                    innerException = new Exception();
                    exception = new ArgumentException(message, param, innerException);
                });

            suite(
                nameof(ArgumentException.constructor),
                () =>
                {
                    test(
                        `Checking whether optional arguments don't need to be passed to the \`${nameof(ArgumentException.constructor)}\`…`,
                        () =>
                        {
                            doesNotThrow(
                                () =>
                                {
                                    new ArgumentException();
                                    new ArgumentException(message);
                                    new ArgumentException(message, param);
                                    new ArgumentException(message, param, innerException);
                                });
                        });

                    test(
                        "Checking whether the values are assigned correctly…",
                        () =>
                        {
                            strictEqual(exception.Message, message);
                            strictEqual(exception.ParamName, param);
                            strictEqual(exception.InnerException, innerException);
                        });
                });
        });
}
