import {useAppSelector} from "@app/hooks"
import {EmptyTag} from "@app/lib/models/Tag"
import {TagListType} from "@app/modules/tagLists"
import {getTagListSelector} from "@app/modules/tagListUtil"

/**
 * Get selected tag
 */
export default function useSelectedTag(tagListType: TagListType) {
  const {allTagIds, tagsById, selectedTag} = useAppSelector(
    getTagListSelector(tagListType),
  )

  function indexValid(index: number) {
    return index >= 0 && index < allTagIds.length
  }

  if (selectedTag && indexValid(selectedTag.index)) {
    const tagId = allTagIds[selectedTag.index]
    if (tagId === selectedTag.id) {
      const t = tagsById[tagId]
      return t || EmptyTag
    }
  }
  // may happen when last favorite is removed
  return EmptyTag
}
