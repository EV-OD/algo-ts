import log from "./index"

import { LinkList, Node } from "./algo/data-structure/link-list";


const Llist = new LinkList(new Node("clothes"))
Llist.push(new Node("king"))
Llist.push(new Node("don"))
Llist.display()
log(Llist.len())
log("==================")
// Llist.reverseRec()
log("==================")
Llist.delMiddle()
Llist.display()
log(Llist.len())


