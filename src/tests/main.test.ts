import { ArgumentExceptionTests } from "./ArgumentException.test";
import { CultureNotFoundExceptionTests } from "./CultureNotFoundException.test";
import { ExceptionTests } from "./Exception.test";

suite(
    "NetExceptions.js",
    () =>
    {
        ExceptionTests();
        ArgumentExceptionTests();
        CultureNotFoundExceptionTests();
    });
