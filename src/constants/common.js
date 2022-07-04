
export const regex = {
    email: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    phoneValidate: /^[0-9]{8}$/,
    arabicPhoneValidate: /^[\u0621-\u064A\u0660-\u0669 ]{8}$/,
}
export const parseArabic = (arabicNumber) => {
    return (arabicNumber?.toString()?.replace(/[٠١٢٣٤٥٦٧٨٩]/g, function (d) {
        return d.charCodeAt(0) - 1632;
    }).replace(/[۰۱۲۳۴۵۶۷۸۹]/g, function (d) { return d.charCodeAt(0) - 1776; })
    );
}