import { Exception } from "./Exception.js";

/**
 * The exception that is thrown when the operating system denies access because of an I/O error or a specific type of security error.
 */
export class UnauthorizedAccessException extends Exception
{
    /**
     * Initializes a new instance of the {@link UnauthorizedAccessException `UnauthorizedAccessException`} class.
     *
     * @param message
     * A message that describes the current exception.
     *
     * @param innerException
     * The Exception instance that caused the current exception.
     */
    public constructor(message?: string, innerException?: Exception)
    {
        super(message, innerException);
    }
}
