import { Exception } from "./Exception";

/**
 * The exception that is thrown when one of the arguments provided to a method is not valid.
 */
export class ArgumentException extends Exception
{
    /**
     * The name of the parameter that causes this exception.
     */
    private paramName: string;

    /**
     * Initializes a new instance of the {@link ArgumentException `ArgumentException`} class.
     *
     * @param message
     * The error message that explains the reason for the exception.
     *
     * @param paramName
     * The name of the parameter that causes this exception.
     *
     * @param innerException
     * The Exception instance that caused the current exception.
     */
    public constructor(message?: string, paramName?: string, innerException?: Exception)
    {
        super(message, innerException);
        this.paramName = paramName;
    }

    /**
     * Gets the name of the parameter that causes this exception.
     */
    public get ParamName(): string
    {
        return this.paramName;
    }
}
