export default function ShowDate(date){
    const arr = date.split("-");
    return `Ngày ${arr[2]} tháng ${arr[1]} năm ${arr[0]}`
}