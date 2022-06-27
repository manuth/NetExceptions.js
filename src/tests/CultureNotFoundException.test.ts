import { doesNotThrow, strictEqual } from "node:assert";
import { Random } from "random-js";
import { CultureNotFoundException } from "../CultureNotFoundException.js";
import { Exception } from "../Exception.js";

/**
 * Registers tests for the {@link CultureNotFoundException `CultureNotFoundException`} class.
 */
export function CultureNotFoundExceptionTests(): void
{
    suite(
        nameof(CultureNotFoundException),
        () =>
        {
            let random: Random;
            let message: string;
            let invalidCulture: string;
            let param: string;
            let innerException: Exception;
            let exception: CultureNotFoundException;

            suiteSetup(
                () =>
                {
                    random = new Random();
                });

            setup(
                () =>
                {
                    message = random.string(15);
                    invalidCulture = random.string(5);
                    param = random.string(10);
                    innerException = new Exception();
                    exception = new CultureNotFoundException(message, invalidCulture, param, innerException);
                });

            suite(
                nameof(CultureNotFoundException.constructor),
                () =>
                {
                    test(
                        `Checking whether optional parameters don't need to be passed to the ${nameof(CultureNotFoundException.constructor)}\`…`,
                        () =>
                        {
                            doesNotThrow(
                                () =>
                                {
                                    new CultureNotFoundException();
                                    new CultureNotFoundException(message);
                                    new CultureNotFoundException(message, invalidCulture);
                                    new CultureNotFoundException(message, invalidCulture, param);
                                    new CultureNotFoundException(message, invalidCulture, param, innerException);
                                });
                        });

                    test(
                        "Checking whether the values are assigned correctly…",
                        () =>
                        {
                            strictEqual(exception.Message, message);
                            strictEqual(exception.InvalidCultureName, invalidCulture);
                            strictEqual(exception.ParamName, param);
                            strictEqual(exception.InnerException, innerException);
                        });
                });
        });
}
