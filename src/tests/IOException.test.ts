import { doesNotThrow, strictEqual } from "assert";
import { Random } from "random-js";
import { Exception } from "../Exception";
import { IOException } from "../IOException";

/**
 * Registers tests for the {@link IOException `IOException`} class.
 */
export function IOExceptionTests(): void
{
    suite(
        nameof(IOException),
        () =>
        {
            let random: Random;
            let message: string;
            let innerException: Exception;
            let exception: IOException;

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
                    exception = new IOException(message, innerException);
                });

            suite(
                nameof(IOException.constructor),
                () =>
                {
                    test(
                        `Checking whether optional parameters don't need to be passed to the \`${nameof(IOException.constructor)}\`…`,
                        () =>
                        {
                            doesNotThrow(
                                () =>
                                {
                                    new IOException();
                                    new IOException(message);
                                    new IOException(message, innerException);
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
