import { Exception } from "./Exception.js";

/**
 * The exception that is thrown when the time allotted for a process or operation has expired.
 */
export class TimeoutException extends Exception
{
    /**
     * Initializes a new instance of the {@link TimeoutException `TimeoutException`} class.
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
