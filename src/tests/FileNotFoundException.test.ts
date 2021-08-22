import { doesNotThrow, strictEqual } from "assert";
import { Random } from "random-js";
import { Exception } from "../Exception";
import { FileNotFoundException } from "../FileNotFoundException";

/**
 * Registers tests for the {@link FileNotFoundException `FileNotFoundException`} class.
 */
export function FileNotFoundExceptionTests(): void
{
    suite(
        nameof(FileNotFoundException),
        () =>
        {
            let random: Random;
            let message: string;
            let fileName: string;
            let innerException: Exception;
            let exception: FileNotFoundException;

            suiteSetup(
                () =>
                {
                    random = new Random();
                });

            setup(
                () =>
                {
                    message = random.string(15);
                    fileName = random.string(20);
                    innerException = new Exception();
                    exception = new FileNotFoundException(message, fileName, innerException);
                });

            suite(
                nameof(FileNotFoundException.constructor),
                () =>
                {
                    test(
                        `Checking whether optional parameters don't need to be passed to the \`${nameof(FileNotFoundException.constructor)}\`…`,
                        () =>
                        {
                            doesNotThrow(
                                () =>
                                {
                                    new FileNotFoundException();
                                    new FileNotFoundException(message);
                                    new FileNotFoundException(message, fileName);
                                    new FileNotFoundException(message, fileName, innerException);
                                });
                        });

                    test(
                        "Checking whether the values are assigned correctly…",
                        () =>
                        {
                            strictEqual(exception.Message, message);
                            strictEqual(exception.FileName, fileName);
                            strictEqual(exception.InnerException, innerException);
                        });
                });
        });
}
