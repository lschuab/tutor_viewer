import React from 'react'
import { Row, Col } from 'reactstrap'
import { dayCodeMap, timeCodeMap } from '../maps'

class TutorSchedule extends React.Component {



  render() {

    const filledCells = []

    
    if (this.props.shifts) {
      for (const shift of this.props.shifts) {
        const dayCode = dayCodeMap[shift.day]
        const startTimeCode = timeCodeMap[shift.start_time]
        const endTimeCode = timeCodeMap[shift.end_time]
        for(let i = startTimeCode; i < endTimeCode; i++) {
          filledCells.push(`${i}-${dayCode}`)
        } 
      }
    }


    console.log(filledCells)

    const times = []
    for (let i = 8; i < 19; i++ ) {
      times.push(`${i % 12 || 12}:00${i < 12 ? 'AM' : 'PM'}`)
      times.push(`${i % 12 || 12}:30${i < 12 ? 'AM' : 'PM'}`)
    }

    const timePs = times.map(time => 
      <Row 
        key={time}
        style={{
          border: "solid",
          overflow: "visible"
        }}
      >
        <Col>
          {time}
        </Col>
      </Row>
    )

    let scheduleGrid = []
    for (let i = 0; i < 22; i++) {
      let row = []
      for (let j = 0; j < 6; j++) {
        row.push(
          <Col
            key={i + " " + j}
            xs="2"
            style={{
              border: "solid",
              boxSizing: "border-box",
              backgroundColor: `${filledCells.includes(i + '-' + j) ? "red" : "white"}`
            }}
          >_</Col>
        )
      }
      scheduleGrid.push(
        <Row 
          key={i}
          style={{
            marginRight: "0px"
          }}
        >{row}</Row>
      )
    }


    return (
      <div>
        <Row>
          <Col xs="1">
          </Col>
          <Col xs="11">
            <Row
              style={{
                marginRight: "0px"
              }}
            >
              <Col xs="2"
                style={{
                  border: "solid",
                  boxSizing: "border-box"
                }}
              >
                Monday
              </Col>
              <Col xs="2"
                style={{
                  border: "solid",
                  boxSizing: "border-box"
                }}
              >
                Tuesday
              </Col>
              <Col 
                xs="2"
                style={{
                  border: "solid",
                  boxSizing: "border-box"
                }}
              >
                Wednesday
              </Col>
              <Col 
                xs="2"
                style={{
                  border: "solid",
                  boxSizing: "border-box"
                }}  
              >
                Thursday
              </Col>
              <Col
                xs="2"
                style={{
                  border: "solid",
                  boxSizing: "border-box"
                }}  
              >
                Friday
              </Col>
              <Col
                xs="2"
                style={{
                  border: "solid",
                  boxSizing: "border-box"
                }}
              >
                Saturday
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col xs="1">
            {timePs}
          </Col>
          <Col xs="11">
            {scheduleGrid}
          </Col>
        </Row>
      </div>
    )
  }
}

export default TutorSchedule