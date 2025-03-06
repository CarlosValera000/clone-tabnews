function status(request, response) {
  response.status(200).json({ chave: "boa" });
}

export default status;
