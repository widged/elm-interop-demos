-- elm-make Main.elm --output ../usage/port.js

port module Main exposing (..)

import Html exposing (Html)
import Html.App as App
import String
import Debug
import Time exposing (Time)
import Task

main =
  App.program
    -- Somehow, the component doesn't listen to ports until it is fully loaded... even if there is no view to mount
    { init = (initialState, now)
    , view = always (Html.text "")
    , update = update
    , subscriptions = (\_ -> Sub.batch
      [ stringToConvert StringToConvert
      ] )
    }

-- MODEL
type alias Store = ()
initialState = ()

-- UPDATE
type Msg
  = WorkerReady
  |  StringConverted
  | StringToConvert (String)

now : Cmd Msg
now =
  Task.perform (always WorkerReady) (always WorkerReady) Time.now


update : Msg -> Store -> (Store, Cmd Msg)
update msg state =
  case msg of
    WorkerReady ->
      ( state, workerReady () )

    StringConverted ->
      state ! []

    StringToConvert str ->
      ( state, stringConverted (upperCase str) )

-- SUBSCRIPTIONS
port workerReady : () -> Cmd msg

port stringConverted : String -> Cmd msg
port stringToConvert : (String -> msg) -> Sub msg

upperCase : String -> String
upperCase str =
    String.toUpper str
