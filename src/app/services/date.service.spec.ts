import {DateService} from "./date.service";
import * as moment from 'moment';

describe('DateService', () => { /* создаём для сервиса или класса */
  let dataServiceInst: DateService = new DateService();
  beforeAll(()=>{

  })

  describe('fillDaysArray', () => { /* создаём для внутренних функций */
    const result = dataServiceInst.fillDaysArray(moment('01/01/2021'));
    console.log(result);

    it('should return 31 days, 10 weekends and 21 business days', () => { /* создаём для каждого теста */
      const daysOffArr = result.filter(day => day.isDayOff);
      const businessDaysArr = result.filter( day => !day.isDayOff);

      expect(result.length).toEqual(31);
      expect(daysOffArr.length).toEqual(10);
      expect(businessDaysArr.length).toEqual(21);
    })

    it('should return first day name Fr and last day name Su', () =>{
      const firstDayOfMonth = result[0].dayName;
      const lastDayOfMonth = result[30].dayName;

      expect(firstDayOfMonth).toEqual('Fr');
      expect(lastDayOfMonth).toEqual('Su');
    })


  })

})
