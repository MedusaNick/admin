import React, { useState, useEffect } from "react"

import { Flex, Text, Box } from "rebass"
import Input from "../input"
import Typography from "../typography"
import styled from "@emotion/styled"
import { parse } from "iso8601-duration"

import { Label } from "@rebass/forms"

const StyledLabel = styled(Label)`
  ${Typography.Base}

  input[type="radio"]:checked ~ svg {
    color: #79b28a;
  }
`

const AvailabilityDuration = ({ setIsoString, existingIsoString }) => {
  const duration = existingIsoString ? parse(existingIsoString) : {}

  const [durationYears, setDurationYears] = useState(duration.years || 0)
  const [durationMonths, setDurationMonths] = useState(duration.months || 0)
  const [durationDays, setDurationDays] = useState(duration.days || 0)
  const [durationHours, setDurationHours] = useState(duration.hours || 0)
  const [durationMinutes, setDurationMinutes] = useState(duration.minutes || 0)

  useEffect(() => {
    const isoString = `P${durationYears || 0}Y${durationMonths || 0}M${
      durationDays || 0
    }DT${durationHours || 0}H${durationMinutes || 0}M`

    setIsoString(isoString)
  }, [
    durationYears,
    durationMonths,
    durationDays,
    durationHours,
    durationMinutes,
  ])

  const AvailabilityDurationField = props => (
    <Flex mb={[1 / 2, 1 / 2, 1 / 2, 3]}>
      <StyledLabel>
        <Flex alignItems="center">
          <Input
            width={50}
            mr={2}
            boldLabel={true}
            value={props.val}
            type="number"
            onChange={e => props.setValue(e.target.value)}
          />

          <Text>{props.unit}</Text>
        </Flex>
      </StyledLabel>
    </Flex>
  )

  return (
    <Flex mb={3} width={[1, 1, 1]} flexDirection="column">
      <StyledLabel mb={3} style={{ fontWeight: 500 }}>
        <Text>Availability Duration</Text>
      </StyledLabel>
      <Box
        sx={{
          display: "grid",
          gridGap: 3,
          gridTemplateColumns: ["1fr", "1fr", "1fr", "1fr 1fr 1fr"],
        }}
      >
        <AvailabilityDurationField
          val={durationYears}
          setValue={setDurationYears}
          unit="Years"
        />
        <AvailabilityDurationField
          val={durationMonths}
          setValue={setDurationMonths}
          unit="Months"
        />
        <AvailabilityDurationField
          val={durationDays}
          setValue={setDurationDays}
          unit="Days"
        />
        <AvailabilityDurationField
          val={durationHours}
          setValue={setDurationHours}
          unit="Hours"
        />
        <AvailabilityDurationField
          val={durationMinutes}
          setValue={setDurationMinutes}
          unit="Minutes"
        />
      </Box>
    </Flex>
  )
}

export default AvailabilityDuration
