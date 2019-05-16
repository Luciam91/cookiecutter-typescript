export default function (...a: number[]): number {
    return a.reduce((acc, val) => acc + val, 0);
}
