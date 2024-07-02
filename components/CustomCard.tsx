/*===============================================================================*/
/*                           Custom Card component                               */
/*===============================================================================*/

/*
 | Author:
 | Rohan Vashisht
 |
 | Details:
 | This is the export for custom card component, it is
 | mostly based off of the flowbite-react Card component.
 | Please check license file for copyright details.
 */

// ===================
//       Imports
// ===================

// ---------- Types -----------
import type Repo from "@/types/custom_types";

// -------- Components ---------
import { Badge, Button, Card, Tooltip } from "flowbite-react";
import Image from "next/image";
import { FaStar, FaEye } from "react-icons/fa";
import { FaCodeFork } from "react-icons/fa6";
import { BsInfoSquareFill } from "react-icons/bs";
import { GoIssueOpened } from "react-icons/go";
import Link from "next/link";


// =====================================================
//       Exports function (Component) Custom Card
// =====================================================
export default function CustomCard(props: { item: Repo }) {

  //------ Convert nubmers to letter ---------
  function number_as_letters(i: number) {
	var generated_string = "";
	if(i.toString().length > 3){
		var my_num = i / 1000;
		generated_string = my_num.toString().slice(0,3) + "K";
	} else {
		generated_string = i.toString();
	}
        return generated_string;
  }
  return (
    <Card className="w-72 my-2 hover:scale-110 transition-transform transform-cpu">
      <Image width="50" height="50" className="w-10 rounded-full" src={props.item.avatar_url} alt={props.item.name} />
      <h5 className="text-2xl font-bold text-gray-900 dark:text-white">
        {props.item.name}
      </h5>
      <p className="text-gray-400">{props.item.full_name} <Badge color={"darkblue"}  className="w-fit bg-slate-600 mt-4">{props.item.license}</Badge></p>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {props.item.description}
      </p>
      <div className="flex items-center">
        <FaStar size={20} color="#cfbc0e" className="mr-2"/>
            {number_as_letters(props.item.stargazers_count)}
        <FaEye className="ml-2 mr-1" color="skyblue" />
            {number_as_letters(props.item.watchers_count)}
        <FaCodeFork className="ml-2 mr-1" color="lightpink" />
            {number_as_letters(props.item.forks_count)}
        <GoIssueOpened className="ml-2 mr-1" color="lightgreen" />
            {number_as_letters(props.item.open_issues)}
        <BsInfoSquareFill className="ml-2 mr-1" color="darkorange" />
        <Tooltip className="ml-2 mr-1" content={props.item.topics?.join(", ")}>
          {props.item.topics?.length}
        </Tooltip>
      </div>
      <Button as={Link} href={"packages/" + props.item.full_name} color="light" pill>
        View package
      </Button>
    </Card>
  )
}
