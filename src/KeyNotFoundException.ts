import { Exception } from "./Exception";

/**
 * The exception that is thrown when the key specified for accessing an element in a collection does not match any key in the collection.
 */
export class KeyNotFoundException extends Exception
{
    /**
     * Initialized a new instance of the `KeyNotFoundException` class.
     *
     * @param message
     * A message that describes the current exception.
     *
     * @param innerException
     * The Exception instance that caused the current exception.
     */
    public constructor(message?: string, innerException?: Exception)
    {
        switch (arguments.length)
        {
            case 0:
                super();
                break;
            case 1:
                super(message);
                break;
            case 2:
                super (message, innerException);
                break;
        }
    }
}