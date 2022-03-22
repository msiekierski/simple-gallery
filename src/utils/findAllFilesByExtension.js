import RNFetchBlob from 'rn-fetch-blob'; 

// export default async function findAllFilesByExtension(path = INTERNAL_STORAGE_PATH) {
//         const lsList = await RNFetchBlob.fs.lstat(path);
//         return lsList.filter(file => file.filename.match('/(.png)$|(.jpg)$|(.jpeg)$/g'));
// }

export default async function findImages(path) {
        return await findAllFilesByExtension([], [path])
}

async function findAllFilesByExtension(result, toBeVisited) {
        if (toBeVisited.length === 0) {
                return result
        }
        let files = [];
        let dirs = [];
        if (toBeVisited[0].includes("/Android/data") || toBeVisited[0].includes("/sdcard/Android") || toBeVisited[0].includes("Android/obb")) {
                console.log('skipped: ' + toBeVisited[0])
                return await findAllFilesByExtension([...result, ...files], [...toBeVisited.slice(1), ...dirs])
        }
        const lsList = await RNFetchBlob.fs.lstat(toBeVisited[0]);
        if (!!lsList && Array.isArray(lsList)) {
                lsList.forEach(item => {
                if (item.type === 'directory') {
                        dirs.push(item.path);
                }
                if (item.type === 'file' && item.filename.match('/(.png)$|(.jpg)$|(.jpeg)$/g')) {
                        files.push(item)
                }
                });
        }
        return await findAllFilesByExtension([...result, ...files], [...toBeVisited.slice(1), ...dirs])
}