import String
import Signal

upperCase : String -> String
upperCase str =
    String.toUpper str

port stringSignal : Signal String

port convertedStringAddress : Signal String
port convertedStringAddress = Signal.map upperCase stringSignal
