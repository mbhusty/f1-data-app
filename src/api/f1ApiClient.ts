import axios from "axios";

export default class F1ApiClient {
  static async fetchRaces(): Promise<any> {
    const res = await axios.get(
      "https://ergast.com/api/f1/2022/results/1.json"
    );
    return res.data.MRData.RaceTable.Races.map(
      (race: { Results: any; raceName: any; date: any }) => ({
        raceName: race.raceName,
        date: race.date,
        winner: race.Results[0].Driver,
      })
    );
  }
}
