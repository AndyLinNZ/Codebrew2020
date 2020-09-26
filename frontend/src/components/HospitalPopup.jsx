import React, { useState, useEffect } from 'react'
import _get from 'lodash/get'
import styled from 'styled-components'
import { Phone, WatchLater, Room, Favorite } from '@material-ui/icons';

const TitleArea = styled.div`
  margin: 5px;
  margin-bottom: 10px;
  border-bottom: 0.15rem solid #d7d9db;
`

const AddressArea = styled.div`
  margin-left: 40px;
  margin-bottom: 8px;
`

const ContactArea = styled.div`
  margin-left: 40px;
  margin-bottom: 8px;
`

const TodayArea = styled.div`
  margin-left: 40px;
  margin-bottom: 8px;
`

const VaccineArea = styled.div`
  margin-left: 40px;
  margin-bottom: 8px;
`

const Vaccine = styled.p`
  font-weight: bold;
  display: inline-block;
`
const Title = styled.h2`
  text-align: center;
`

const Distance = styled.p`
  padding: 5px;
  padding-right: 11px;
  text-align: right;
  font-size: 16px;
`

const StyledRoom = styled(Room)`
  color: green;
  display: inline-block;
  margin-top: 2px;
  left: 14px;
  font-size: 16px !important;
  position: absolute;
`

const StyledPhone = styled(Phone)`
  color: green;
  display: inline-block;
  margin-top: 2px;
  left: 14px;
  font-size: 16px !important;
  position: absolute;
`

const StyledFavorite = styled(Favorite)`
  color: red;
  display: inline-block;
  margin-top: 2px;
  left: 14px;
  font-size: 16px !important;
  position: absolute;
`

const StyledWatchLater = styled(WatchLater)`
  color: green;
  display: inline-block;
  margin-top: 2px;
  left: 14px;
  font-size: 16px !important;
  position: absolute;
`

const Address = styled.p`
  font-weight: bold;
  display: inline-block;
`

const Contact = styled.p`
  font-weight: bold;
  margin-bottom: 6px;
  display: inline-block;
`

const Opening = styled.p`
  font-weight: bold;
  display: inline-block;
`

const OpenNow = styled.p`
  color: ${props => props.openNow ? 'green' : 'red'};
`

const VaccineLevel = styled.p`
  color: ${props => determineColor(props.vaccineLevel)};
  font-weight: bold;
`

const determineColor = (level) => {
  if (level === "Low") {
    return 'red'
  } else if (level === "Medium") {
    return 'orange'
  } else if (level === "High") {
    return 'green'
  } else {
    return 'black'
  }
}

const HospitalPopup = ({ distance, vaccineLevel, address, phoneNumber, name, openingHours, website }) => {
  
  const openNow = _get(openingHours, 'open_now', undefined)
  
  const [hours, setHours] = useState('')

  const getOpeningHours = (weekDays) => {
    if (weekDays === undefined) {
      return;
    }
    const textData = weekDays[new Date().getUTCDay()]
    setHours(textData.substr(textData.indexOf(' ') + 1))
  }

  useEffect(() => {
    const weekDays = _get(openingHours, 'weekday_text')
    getOpeningHours(weekDays)
  }, [openingHours])

  getOpeningHours()

  return (
    <div>
      <TitleArea>
        <Title>
          {name}
        </Title>
        <Distance>
          {distance.toFixed(2)} km
        </Distance>
      </TitleArea>
      <VaccineArea>
        <StyledFavorite/>
        <Vaccine>
          Vaccine Supply:
        </Vaccine>
        <VaccineLevel vaccineLevel={vaccineLevel}>{vaccineLevel}</VaccineLevel>
      </VaccineArea>
      <AddressArea>
        <StyledRoom/>
        <Address>Address:</Address>
        <p>{address}</p>
      </AddressArea>
      <ContactArea>
        <StyledPhone/>
        <Contact>Contact:</Contact>
          <ul style={{marginLeft: 40}}>
            {phoneNumber && <li>Phone: {phoneNumber}</li>}
            {website && <li style={{overflowWrap: 'anywhere'}}>Website: <a href={website} target="_blank">{website}</a></li>}
          </ul>
      </ContactArea>
      <TodayArea>
        <StyledWatchLater/>
        <Opening>Today's opening hours:</Opening>
        <p>{hours ? hours: 'None provided'}</p>
        {openNow !== undefined && <OpenNow openNow={openNow}>{openNow ? 'Open now' : 'Closed'}</OpenNow>}
      </TodayArea>
    </div>
  )
}

export default HospitalPopup
