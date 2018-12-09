import { Exception } from "./Exception";
import { IOException } from "./IOException";
const Format = require('string-format');

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
     * Initializes a new instance of the FileNotFoundException class
     */
    public constructor();

    /**
     * Initializes a new instance of the FileNotFoundException class with its message string set to _message_.
     * 
     * @param message
     * A description of the error. The content of message is intended to be understood by humans. The caller of this constructor is required to ensure that this string has been localized for the current system culture.
     */
    public constructor(message: string);

    /**
     * Initializes a new instance of the FileNotFoundException class with a specified error message and a reference to the inner exception that is the cause of this exception.
     * 
     * @param message
     * A description of the error. The content of message is intended to be understood by humans. The caller of this constructor is required to ensure that this string has been localized for the current system culture.
     * 
     * @param innerException
     * The exception that is the cause of the current exception. If the innerException parameter is not **null**, the current exception is raised in a **catch** block that handles the inner exception.
     */
    public constructor(message: string, innerException: Exception)

    /**
     * Initializes a new instance of the FileNotFoundException class with its message string set to message, specifying the file name that cannot be found.
     * 
     * @param message
     * A description of the error. The content of message is intended to be understood by humans. The caller of this constructor is required to ensure that this string has been localized for the current system culture.
     * 
     * @param fileName
     * The full name of the file with the invalid image.
     */
    public constructor(message: string, fileName: string);

    /**
     * Initializes a new instance of the FileNotFoundException class with a specified error message and a reference to the inner exception that is the cause of this exception.
     * 
     * @param message
     * The error message that explains the reason for the exception.
     * 
     * @param fileName
     * The full name of the file with the invalid image.
     * 
     * @param innerException
     * The exception that is the cause of the current exception. If the innerException parameter is not **null**, the current exception is raised in a **catch** block that handles the inner exception.
     */
    public constructor(message: string, fileName: string, innerException: Exception);

    public constructor(message?: string, fileName?: Exception | string, innerException?: Exception)
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
                if (typeof fileName != 'string')
                {
                    super(message, fileName);
                }
                else
                {
                    super(message);
                    this.fileName = fileName;
                }
                break;
            case 3:
                super(message, innerException);
                this.fileName = <string>fileName;
                break;
        }
    }

    /**
     * Gets the name of the file that cannot be found.
     */
    public get FileName(): string
    {
        return this.fileName;
    }
}