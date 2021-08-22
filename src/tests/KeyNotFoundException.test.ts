import { doesNotThrow, strictEqual } from "assert";
import { Random } from "random-js";
import { Exception } from "../Exception";
import { KeyNotFoundException } from "../KeyNotFoundException";

/**
 * Registers tests for the {@link KeyNotFoundException `KeyNotFoundException`} class.
 */
export function KeyNotFoundExceptionTests(): void
{
    suite(
        nameof(KeyNotFoundException),
        () =>
        {
            let random: Random;
            let message: string;
            let innerException: Exception;
            let exception: KeyNotFoundException;

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
                    exception = new KeyNotFoundException(message, innerException);
                });

            suite(
                nameof(KeyNotFoundException.constructor),
                () =>
                {
                    test(
                        `Checking whether optional parameters don't need to be passed to the \`${nameof(KeyNotFoundException.constructor)}\`…`,
                        () =>
                        {
                            doesNotThrow(
                                () =>
                                {
                                    new KeyNotFoundException();
                                    new KeyNotFoundException(message);
                                    new KeyNotFoundException(message, innerException);
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
