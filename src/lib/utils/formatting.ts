export const formatSalary = (salary: any) => {
    let stringSalary = String(salary)
    if (stringSalary.length <= 3){
        return '$' + stringSalary
    }
    return '$' + stringSalary.slice(0, stringSalary.length - 3) + ',' + stringSalary.slice(stringSalary.length - 3, stringSalary.length)
}

interface TimeDifference {
    value: number;
    unit: string;
    description: string;
}

export function getTimeDifference(timestampStr: string): TimeDifference {
    const targetDate = new Date(timestampStr);

    if (isNaN(targetDate.getTime())) {
        throw new Error('Invalid timestamp format');
    }

    const now = new Date();
    const diffInSeconds = Math.abs((now.getTime() - targetDate.getTime()) / 1000);

    const formatDifference = (
        value: number,
        unit: string,
        useDecimals: boolean = false
    ): TimeDifference => {
        const roundedValue = useDecimals ? Math.round(value * 10) / 10 : Math.round(value);
        return {
            value: roundedValue,
            unit,
            description: `${roundedValue} ${unit}${roundedValue !== 1 ? 's' : ''}`
        };
    };

    if (diffInSeconds < 45) {
        return formatDifference(diffInSeconds, 'second');
    } else if (diffInSeconds < 90) {
        return formatDifference(1, 'minute');
    } else if (diffInSeconds < 2700) {
        return formatDifference(Math.round(diffInSeconds / 60), 'minute');
    } else if (diffInSeconds < 5400) {
        return formatDifference(1, 'hour');
    } else if (diffInSeconds < 86400) {
        return formatDifference(diffInSeconds / 3600, 'hour', true);
    } else if (diffInSeconds < 172800) {
        return formatDifference(1, 'day');
    } else if (diffInSeconds < 2592000) {
        return formatDifference(diffInSeconds / 86400, 'day');
    } else if (diffInSeconds < 31536000) {
        return formatDifference(diffInSeconds / 2592000, 'month');
    } else {
        return formatDifference(diffInSeconds / 31536000, 'year', true);
    }
}

export function getDate(date: string){
    return date.slice(0,10)
}