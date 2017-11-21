export interface LineChart {
    labels: string[];
    datasets: DataSet[];
}

export interface DataSet {
    label?: string;
    data: number[];
    fill?: boolean;
    borderColor?: string;
}
