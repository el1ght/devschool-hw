function unpackSausages(truck) {
    let good = truck.flat(1).filter((pkg) => /^\[(.)\1{3}\]$/.test(pkg));
    good = good.filter((pkg, i) => !i || (i + 1) % 5);
    good = good.map((pkg) => pkg.slice(1, 5)).join("");
    return [...good].join(" ");
}
