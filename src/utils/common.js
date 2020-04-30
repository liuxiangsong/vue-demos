import REGULAR from './regular'
/**
 * 取得字符串中格式正确的手机号和座机号
 * @param {string} contactNumber 
 */
export function getContactNumbers(contactNumber) {
    if (!contactNumber) {
        return {phones: [],  telephones: [] }
    }
    let phones=[]
    let telephones=[]
    var numbers=contactNumber.split(/[,，/]/).filter(n=>n)
    numbers.forEach(num => {
        if(REGULAR.mobilePhone.test(num)){
            phones.push(num)
        }else if(REGULAR.landlinePhone.test(num)){
            telephones.push(num)
        }
    }) 
    return { phones, telephones }
}