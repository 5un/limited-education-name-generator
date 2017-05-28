import _ from 'lodash'

const transformations = [
  { from: 'ช', fn: (name) => (name.replace(/ช/i, 'ข')) },
  { from: 'ข', fn: (name) => (name.replace(/ข/i, 'ช')) },
  { from: 'า', fn: (name) => (name.replace(/า/i, 'ว')) },
  { from: 'ว', fn: (name) => (name.replace(/ว/i, 'า')) },
  { from: 'ั', fn: (name) => (name.replace(/ั/i, 'ิ')) },
  { from: 'ิ', fn: (name) => (name.replace(/ิ/i, 'ั')) },
  { from: 'ี', fn: (name) => (name.replace(/ี/i, 'ิ')) },
  { from: 'ิ', fn: (name) => (name.replace(/ิ/i, 'ี')) },
  { from: 'พ', fn: (name) => (name.replace(/พ/i, 'ผ')) },
  { from: 'ผ', fn: (name) => (name.replace(/ผ/i, 'พ')) },
  { from: 'า', fn: (name) => (name.replace(/า/i, 'าา')) },
  { from: 'ข', fn: (name) => (name.replace(/ข/i, 'ป')) },
  { from: 'ข', fn: (name) => (name.replace(/ข/i, 'บ')) },
  { from: 'บ', fn: (name) => (name.replace(/บ/i, 'ข')) },
  { from: 'ป', fn: (name) => (name.replace(/ป/i, 'ข')) },
  { from: 'บ', fn: (name) => (name.replace(/บ/i, 'ป')) },
  { from: 'ป', fn: (name) => (name.replace(/ป/i, 'บ')) },
  { from: 'ด', fn: (name) => (name.replace(/ด/i, 'ค')) },
  { from: 'ค', fn: (name) => (name.replace(/ค/i, 'ด')) },
  { from: 'ส', fn: (name) => (name.replace(/ส/i, 'ล')) },
  { from: 'ล', fn: (name) => (name.replace(/ล/i, 'ส')) },
  { from: 'แ', fn: (name) => (name.replace(/แ/i, 'เ')) },
  { from: 'เ', fn: (name) => (name.replace(/เ/i, 'แ')) },
  { from: 'ท', fn: (name) => (name.replace(/ท/i, 'ห')) },
  { from: 'ห', fn: (name) => (name.replace(/ห/i, 'ท')) },
  { from: 'ก', fn: (name) => (name.replace(/ก/i, 'า')) },
  { from: 'า', fn: (name) => (name.replace(/า/i, 'ก')) },
  { from: 'อ', fn: (name) => (name.replace(/อ/i, 'ว')) },
  { from: 'ว', fn: (name) => (name.replace(/ว/i, 'อ')) },
  { from: 'ก', fn: (name) => (name.replace(/ก/i, 'ท')) },
];

const transformName = (name) => {
  let outName = name;
  const numErrors = Math.ceil(name.length / 5);
  const potentialTransformations =  _.shuffle(
                                      _.filter(
                                          transformations, 
                                          (t) => (name.indexOf(t.from) > -1)
                                        )
                                    );
  console.log(potentialTransformations);
  _.forEach(potentialTransformations, (t, i) => {
    console.log(t);
    if (i < numErrors) {
      outName = t.fn(outName);
    }
  });
  return outName;
};
export default transformName;