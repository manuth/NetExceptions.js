import { Exception } from "./Exception";

/**
 * The exception that is thrown when an I/O error occurs.
 */
export class IOException extends Exception
{
    /**
     * Initializes a new instance of the `IOException` class.
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
