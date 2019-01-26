# mozilla-telemetry-x

These are C++ sources for experimental analysis of mozilla telemetry. Together with gathered data in the form of Mozilla telemetry main ping JSON files, optional browsertime JSON files, can render results in a variety of output views and formats.


**BUILDING**

Main excecutables are built from sources in the src directory, by running `scripts/compile.sh` like so
```
../scripts/compile-source.sh moz-telemetry-x-extract.cc
```

**RUNNING**

```
moz-telemetry-x-extract.exe
moz-telemetry-x-analyze-radial.exe
moz-telemetry-x-analyze-ripple.exe
```


`moz-telemetry-x-extract.exe names.txt data.json`

Extract data from input JSON file into CSV file of *probe names* and timing *values*.


`moz-telemetry-x-analyze-radial.exe data.csv`

Extract data from input CSV file and render into visual form SVG


`moz-telemetry-x-analyze-radial.exe data1.csv data2.csv (edit.txt)`

Extract data from input CSV files and render into visual form SVG. The optional *edit.txt* file is used to hilight the probe names from the *data1.csv* file. 

