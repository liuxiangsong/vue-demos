export function saveFile(base64,filename){
    let blob=  this.base64ToBlob(base64)
    if (window.navigator.msSaveOrOpenBlob) {//msSaveOrOpenBlob方法返回bool值
        navigator.msSaveBlob(blob, filename)//本地保存
    } else {
        var link = document.createElement('a')//a标签下载
        link.href = window.URL.createObjectURL(blob)
        link.download = filename
        link.click()
        window.URL.revokeObjectURL(link.href)
    }
}

/**
* database64文件格式转换为2进制
*
* @param  {[String]} data data的格式为 “data:image/png;base64,****”
* @return {[blob]}
*/
export function base64ToBlob(data) {
    const  arr = data.split(',')
    const mime = arr[0].match(/:(.*?);/)[1]  
    const raw = window.atob(arr[1])
    const rawLength = raw.length
    const uint8Array = new Uint8Array(rawLength)
    for (let i = 0; i < rawLength; ++i) {
        uint8Array[i] = raw.charCodeAt(i)
    }
    return new Blob([uint8Array], {type: mime})
    // return new File([uint8Array], filename, {type:mime});
}