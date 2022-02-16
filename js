const objs = [
    { name: "Kevin", age: 5, id: 1 },
    { name: "Matt", age: 53, id: 5 },
    { name: "Marry", age: 30, id: 2 },
    { name: "Leslie", age: 21, id: 3 },
    { name: "Sarah", age: 46, id: 4 },
    { name: "Heather", age: 37, id: 6 },
    { name: "Cory", age: 19, id: 7 },
]

const objRefs = [
    { parent_id: 5, obj_id: 7 }, // cory child of matt
    { parent_id: null, obj_id: 6 }, // matt root
    { parent_id: null, obj_id: 4 }, // sarah root
    { parent_id: null, obj_id: 5 }, // heather root
    { parent_id: 5, obj_id: 3 }, // leslie child of matt
    { parent_id: 4, obj_id: 2 }, // mary child of sarah
    { parent_id: 3, obj_id: 1 }, // kevin child of leslie
]
