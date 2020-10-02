import { Exception } from "./Exception";
import { IOException } from "./IOException";

/**
 * The exception that is thrown when an attempt to access a file that does not exist on disk fails.
 */
export class FileNotFoundException extends IOException
{
    /**
     * The name of the file that cannot be found.
     */
    private fileName: string;

    /**
     * Initializes a new instance of the `FileNotFoundException` class.
     *
     * @param message
     * A message that describes the current exception.
     *
     * @param fileName
     * The name of the file that cannot be found.
     *
     * @param innerException
     * The Exception instance that caused the current exception.
     */
    public constructor(message?: string, fileName?: string, innerException?: Exception)
    {
        super(message, innerException);
        this.fileName = fileName;
    }

    /**
     * Gets the name of the file that cannot be found.
     */
    public get FileName(): string
    {
        return this.fileName;
    }
}
