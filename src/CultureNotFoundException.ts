import { ArgumentException } from "./ArgumentException";
import { Exception } from "./Exception";

/**
 * The exception that is thrown when a method attempts to construct a culture that is not available.
 */
export class CultureNotFoundException extends ArgumentException
{
    /**
     * The culture name that cannot be found.
     */
    private invalidCultureName: string;

    /**
     * Initializes a new instance of the `CultureNotFoundException` class.
     *
     * @param message
     * The error message that explains the reason for the exception.
     *
     * @param invalidCultureName
     * The culture name that cannot be found.
     *
     * @param paramName
     * The name of the parameter that causes this exception.
     *
     * @param innerException
     * The Exception instance that caused the current exception.
     */
    public constructor(message?: string, invalidCultureName?: string, paramName?: string, innerException?: Exception)
    {
        super(message, paramName, innerException);
        this.invalidCultureName = invalidCultureName;
    }

    /**
     * Gets the culture name that cannot be found.
     */
    public get InvalidCultureName(): string
    {
        return this.invalidCultureName;
    }
}
