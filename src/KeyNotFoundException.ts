import { Exception } from "./Exception";

/**
 * The exception that is thrown when the key specified for accessing an element in a collection does not match any key in the collection.
 */
export class KeyNotFoundException extends Exception
{
    /**
     * Initialized a new instance of the {@link KeyNotFoundException `KeyNotFoundException`} class.
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
