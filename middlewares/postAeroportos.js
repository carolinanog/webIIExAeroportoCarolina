export const redirectRoute = (req, res) => {
    const { origem, destino } = req.body;
    if (origem === destino) return res.json({ messagem: "A origem e o destino não podem ser os mesmos! Por favor, tente novamente!"});
    res.redirect(`/voos/${origem}/${destino}`)
}