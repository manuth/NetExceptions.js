import { doesNotThrow, strictEqual } from "node:assert";
import { Random } from "random-js";
import { Exception } from "../Exception.js";
import { UnauthorizedAccessException } from "../UnauthorizedAccessException.js";

/**
 * Registers tests for the {@link UnauthorizedAccessException `UnauthorizedAccessException`} class.
 */
export function UnauthorizedAccessExceptionTests(): void
{
    suite(
        nameof(UnauthorizedAccessException),
        () =>
        {
            let random: Random;
            let message: string;
            let innerException: Exception;
            let exception: UnauthorizedAccessException;

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
                    exception = new UnauthorizedAccessException(message, innerException);
                });

            suite(
                nameof(UnauthorizedAccessException.constructor),
                () =>
                {
                    test(
                        `Checking whether optional parameters don't need to be passed to the \`${nameof(UnauthorizedAccessException.constructor)}\`…`,
                        () =>
                        {
                            doesNotThrow(
                                () =>
                                {
                                    new UnauthorizedAccessException();
                                    new UnauthorizedAccessException(message);
                                    new UnauthorizedAccessException(message, innerException);
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
