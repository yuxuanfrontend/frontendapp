import moment from 'moment'

let lineRandomData = function() {
  let xLabelTime = [moment('930', 'hmm'), moment('1030', 'hmm'), moment('1130', 'hmm'), moment('1400', 'hmm'), moment('1500', 'hmm')]

  let amStartTime = moment('930', 'hmm'),
  amEndTime = moment('1130', 'hmm'),
  pmStartTime = moment('1300', 'hmm'),
  pmEndTime = moment('1500', 'hmm')

  let activeValue = 100,
  activeTime = amStartTime.clone(),
  xTime = [],
  values = []

  while (activeTime <= pmEndTime) {
    activeValue = Number((activeValue + (4 * Math.random() - 2)).toFixed(2))

    xTime.push(activeTime.valueOf())
    values.push(activeValue)

    if (activeTime.valueOf() === amEndTime.valueOf()) {
      activeTime = pmStartTime.clone()
    }

    activeTime.add(1, 'm')
  }

  return {xTime, values}
}

module.exports = lineRandomData()
