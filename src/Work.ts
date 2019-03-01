interface IWorks {
    convert(i: number): string;
}

export class Work implements IWorks {
    convert(i: number): string {
        return i.toString();
    }
}