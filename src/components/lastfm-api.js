import React, { useState, useEffect } from "react"
import SpotifyElement from "./spotify-element"
import { Box, CircularProgress, Flex } from "@chakra-ui/core"
import moment from 'moment'

export const FetchRecentTracks = () => {
  const [lfmData, updateLfmData] = useState({})

  const USERNAME = "luisdibdin"
  const API_KEY = process.env.GATSBY_LASTFM_KEY
  const API = "https://ws.audioscrobbler.com/2.0/"
  const url = `${API}?method=user.getRecentTracks&user=${USERNAME}&api_key=${API_KEY}&limit=10&format=json`

  useEffect(() => {
    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json()
        }
        throw new Error("error")
      })
      .then(data => updateLfmData(data))
      .catch(() =>
        updateLfmData({ error: "Whoops! Something went wrong with Last.fm" })
      )
  }, [])

  const buildLastFmData = () => {
    const { error } = lfmData
    const tracks = lfmData?.recenttracks?.track

    if (error) {
      return <p>{error}</p>
    }

    if (!tracks) {
      return (
        <Flex width="100%" align="center" justify="center">
          <CircularProgress isIndeterminate color="primary.lightBlue" size="100px" />
        </Flex>
      )
    }

    return (
      <Flex overflowX="auto">
        {tracks.map(track => {
          console.log(track)
          return (
            <Box mt={5}>
              <SpotifyElement
                name={track.name}
                imageData={track.image[3]["#text"]}
                artist={track.artist["#text"]}
                url={track.url}
                played={track["@attr"] !== undefined ? "Listening now" : moment.unix(track.date.uts).fromNow()}
              />
            </Box>
          )
        })}
      </Flex>
    )
  }

  return buildLastFmData()
}
