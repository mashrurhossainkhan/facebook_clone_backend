exports.home = (req, res) => {
  res.status(200).json({
    //200 all ok, 204 => status ok but will not send the json values
    message: 'check',
    error: 'no',
  });
};
