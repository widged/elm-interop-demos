-- elm-make Main.elm --output ../usage/port.js

port module Main exposing (..)

import Html exposing (Html, text)
import Html.App as Html
import String
import Debug


main =
  Html.program
    { init = () ! []
    , view = view
    , update = update
    , subscriptions = subscriptions
    }


-- MODEL
type alias Store = ()

-- UPDATE
type Msg
  = StringConverted
  | StringToConvert (String)



update : Msg -> Store -> (Store, Cmd Msg)
update msg model =
  case msg of
    StringConverted ->
      () ! []

    StringToConvert str ->
      ( (), stringConverted (upperCase str) )


-- SUBSCRIPTIONS
port stringConverted : String -> Cmd msg
port stringToConvert : (String -> msg) -> Sub msg

subscriptions : Store -> Sub Msg
subscriptions model =
  stringToConvert StringToConvert

-- VIEW
view : Store -> Html Msg
view store = text ""

upperCase : String -> String
upperCase str =
    String.toUpper str
