# Getting started

## prepare aws credential and s3 bucket

make sure there is a bucket to save image

```
aws s3 mb s3://great-bucket
```

and set credentials and bucket name to uploadCode.gs

## create SpreadSheet

- Gogole Drive > create spread sheet > tools (menu bar) > script editor
- `pbcopy < uploadCode.gs` and paste
- create new script file with name uploadHtml.html > `pbcopy < uploadHtml.html` and paste
- resources (menu bar) > libraries > search MwqwJA__rGDb9ciB-4c2Lfz4e5fkJzZ6i & install
- select function > onOpen > execute
- back to the sheet > Custom > Upload Image
