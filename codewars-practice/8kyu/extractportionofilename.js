// Inputs:
// 1231231223123131_FILE_NAME.EXTENSION.OTHEREXTENSION

// 1_This_is_an_otherExample.mpg.OTHEREXTENSIONadasdassdassds34

// 1231231223123131_myFile.tar.gz2
// Outputs
// FILE_NAME.EXTENSION

// This_is_an_otherExample.mpg

// myFile.tar
// Acceptable characters for random tests:

// abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-0123456789

// The recommended way to solve it is using RegEx and specifically groups.

// My solution

class FileNameExtractor {
    static extractFileName (dirtyFileName) {
        var numSlice = dirtyFileName.indexOf('_')
        var extSlice = dirtyFileName.lastIndexOf('.')
        dirtyFileName = dirtyFileName.slice(numSlice+1, extSlice)
        return dirtyFileName
    }
}