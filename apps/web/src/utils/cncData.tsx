export interface CNCData {
  timestamp: string // TIMESTAMP
  spindlerpm?: number // INTEGER
  currentfeadrate?: number // INTEGER
  spindleload?: number // INTEGER
  xaxis?: string // VARCHAR(10)
  zaaxis?: string // VARCHAR(10)
  toolgroupid?: number // INTEGER
  toollifecounter?: number // INTEGER
  partcounter?: number // INTEGER
  powerontime?: string // VARCHAR(20)
  operationtime?: string // VARCHAR(20)
  cuttime?: string // VARCHAR(20)
  cycletime?: string // VARCHAR(20)
  alarm0?: number // INTEGER
  alarm1?: number // INTEGER
  alarm2?: number // INTEGER
  alarm3?: number // INTEGER
  alarm4?: number // INTEGER
  alarm5?: number // INTEGER
  alarm6?: number // INTEGER
  alarm7?: number // INTEGER
  alarm8?: number // INTEGER
  alarm9?: number // INTEGER
  alarm10?: number // INTEGER
  alarm11?: number // INTEGER
  alarm12?: number // INTEGER
  alarm13?: number // INTEGER
  alarm14?: number // INTEGER
  axesno?: number // INTEGER
  onoff?: number // INTEGER
  ncprogno?: number // INTEGER
  ncmainprogno?: number // INTEGER
  spindleno?: number // INTEGER
  operationmode?: number // INTEGER
  servocurrent1?: number // INTEGER
  servocurrent2?: number // INTEGER
  servocurrent3?: number // INTEGER
  servocurrent4?: number // INTEGER
  servocurrent5?: number // INTEGER
  servomotorspeed1?: number // INTEGER
  servomotorspeed2?: number // INTEGER
  servomotorspeed3?: number // INTEGER
  servomotorspeed4?: number // INTEGER
  servomotorspeed5?: number // INTEGER
  temp?: number // FLOAT
  gcodegroupno?: number // INTEGER
  gcodeflag?: number // INTEGER
  gcode?: string // VARCHAR(10)
}
