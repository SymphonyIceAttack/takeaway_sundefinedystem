import {
    Button,
    Input,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    Radio,
    RadioGroup,
} from '@nextui-org/react'
import React, { useEffect, useState } from 'react'
interface Props {
    isOpen: boolean
    onOpenChange: () => void
    onClose: () => void
    RequserInteraction: (isLike: boolean, comment: string) => Promise<void>
}
const index = ({
    isOpen,
    onOpenChange,
    onClose,
    RequserInteraction,
}: Props) => {
    const [comment, setcomment] = useState('')

    const [isLike, setisLike] = useState(true)

    useEffect(() => {
        setcomment('')
        setisLike(true)
    }, [isOpen])

    return (
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent>
                <form
                    id="LikeForm"
                    onSubmit={(e) => {
                        e.preventDefault()

                        RequserInteraction(isLike, comment).then((res) => {
                            onClose()
                        })
                    }}>
                    <ModalHeader className="flex flex-col gap-1">
                        反馈面板
                    </ModalHeader>
                    <ModalBody>
                        <RadioGroup
                            isRequired={true}
                            label="点赞或点踩"
                            onValueChange={(value) => {
                                setisLike(value === 'Like')
                            }}>
                            <Radio value="Like">赞</Radio>
                            <Radio value="unLike">踩</Radio>
                        </RadioGroup>

                        <Input
                            isRequired
                            size={'md'}
                            variant="bordered"
                            label="评论"
                            value={comment}
                            onChange={(e) => {
                                setcomment(e.target.value)
                            }}
                        />
                    </ModalBody>
                    <ModalFooter>
                        <Button
                            color="danger"
                            variant="light"
                            onPress={onClose}>
                            关闭
                        </Button>
                        <Button color="primary" type="submit">
                            反馈
                        </Button>
                    </ModalFooter>
                </form>
            </ModalContent>
        </Modal>
    )
}

export default index
