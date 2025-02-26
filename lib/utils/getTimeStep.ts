/**
 * 获取时间段
 * @param {*} start 开始时间
 * @param {*} end 结束时间
 * @param {*} step 步长
 * @param {*} type hh:mm:ss hh:mm
 * @returns
 */
export function getTimeStep(
  start: string,
  end: string,
  step: any = "01:00",
  type: any = "hh:mm"
) {
  const toSeconds = (time: string) =>
    time
      .split(":")
      .map(Number)
      .reduce((a, v, i) => a + v * [3600, 60, 1][i], 0);
  const format = (time: number) =>
    [Math.floor(time / 3600), Math.floor((time % 3600) / 60), time % 60]
      .map((v) => String(v).padStart(2, "0"))
      .join(":");

  const startTime = toSeconds(start);
  const endTime = toSeconds(end);
  const stepTime = toSeconds(step);

  const result = [];
  for (let time = startTime; time <= endTime; time += stepTime) {
    result.push(type === "hh:mm:ss" ? format(time) : format(time).slice(0, 5));
  }

  return result;
}