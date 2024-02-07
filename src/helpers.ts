import {computed} from "vue";

export const formatNumber = (number: number) => {
    const options: Intl.NumberFormatOptions = {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
        useGrouping: true,
    }
    const locale = "pl-PL";

    return number.toLocaleString(locale, options);
}

export const getCategoryColor = (id: number) => {
    const colors = [
        "orange",
        "brown",
        "green",
        "blue",
        "purple",
    ]

    return colors[id - 1]

}

export const formattedDate = (date: Date) => {
    return date.toLocaleDateString("pl");
};