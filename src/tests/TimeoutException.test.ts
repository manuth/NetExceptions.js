import { doesNotThrow, strictEqual } from "assert";
import { Random } from "random-js";
import { Exception } from "../Exception.js";
import { TimeoutException } from "../TimeoutException.js";

/**
 * Registers tests for the {@link TimeoutException `TimeoutException`} class.
 */
export function TimeoutExceptionTests(): void
{
    suite(
        nameof(TimeoutException),
        () =>
        {
            let random: Random;
            let message: string;
            let innerException: Exception;
            let exception: TimeoutException;

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
                    exception = new TimeoutException(message, innerException);
                });

            suite(
                nameof(TimeoutException.constructor),
                () =>
                {
                    test(
                        `Checking whether optional parameters don't need to be passed to the \`${nameof(TimeoutException.constructor)}\`…`,
                        () =>
                        {
                            doesNotThrow(
                                () =>
                                {
                                    new TimeoutException();
                                    new TimeoutException(message);
                                    new TimeoutException(message, innerException);
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
        });
}
