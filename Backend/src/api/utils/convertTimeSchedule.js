const convertTimeSchedule = (presets) => {
  const activePresets = presets.filter((preset) =>{
    return preset.status === 'on'
  })

  const res = activePresets.map((preset) => {
    const {date} = preset
    const hm = date.split(':')
    return hm.map( i => parseInt(i) )
  })

  return res
}

module.exports = convertTimeSchedule