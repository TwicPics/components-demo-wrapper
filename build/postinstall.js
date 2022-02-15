import __dirname from "./__dirname.js";
import { resolve } from "path";
import { copy } from "fs-extra";

const rDependency = /\/node_modules\/@twicpics\/components-demo-wrapper/gm;

/**
 * move the content of the src folder to the root of the project (only in the case of installation as a dependency)
 */
const moveFilesToRootFolder = async () => {
    // copy content of src/_ to root and then content of src to root
    const sourcePaths = [ resolve( ``, `src/_` ), resolve( ``, `src` ) ];
    const destinationPath = resolve( `` );
    await Promise.all( ( sourcePaths ).map( async sourcePath => {
        await copy( sourcePath, destinationPath );
    } ) );
};

/**
 * check if installing project as dependency
 * if installing project as dependency --> call moveFilesToRootFolder
 */
if ( rDependency.test( __dirname ) ) {
    // eslint-disable-next-line no-console
    await moveFilesToRootFolder();
}

